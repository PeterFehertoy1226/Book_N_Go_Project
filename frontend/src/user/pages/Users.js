import React, { useEffect, useState } from 'react';
import Popup from'../../shared/components/UIElements/Popup';
import UsersList from'../components/UsersList';
import SearchBox from'../../shared/components/UIElements/searchBox';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
const Users = () => {
    const { isLoading, error, sendRequest, clearError} = useHttpClient();
    const [loadedUsers, setLoadedUsers] = useState();


    useEffect(() => {
        const fetchUsers = async () => {   
            try{
                const responseData = await sendRequest('http://localhost:5000/api/users');
                    
                setLoadedUsers(responseData.users);
            } catch (err) {}
    };
    fetchUsers();
    }, [sendRequest]);
   
    return (
      <React.Fragment>
          <ErrorModal error={error} onClear={clearError} />
        
        <div className="user-main-container">     
            <div className="search-field">
                <SearchBox />  
            </div>
            
            <div className="user-field">
            {isLoading &&(
            <div className="center">
                <LoadingSpinner />
            </div>
        )}
        {!isLoading && loadedUsers && <UsersList items={loadedUsers}/>  } 
            </div>
        </div>
        </React.Fragment>
    )
};

export default Users;