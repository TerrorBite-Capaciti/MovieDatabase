import React from "react";
import { useHistory } from 'react-router-dom';

const ErrorPage = ({ searchQuery }) => {
    const history = useHistory();

    const handleRefineSearch = () => {
        // Redirect back to the search page
        history.push('/search');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Sorry we couldn't find what you're looking for 😔.</h1>
            <p style={styles.message}>
                We couldn't find any results for "<strong>{searchQuery}</strong>". Please check your spelling or try a different query.
            </p>
            <button style={styles.button} onClick={handleRefineSearch}>
                Refine your search
            </button>
            <div style={styles.suggestions}>
                <h2>Suggestions</h2>
                <ul>
                    <li>Try using different keywords</li>
                    <li>Check for typos in your search</li>
                    <li>Browse popular categories or genres</li>
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        padding: '20px',
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    message: {
        fontSize: '18px',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    suggestions: {
        marginTop: '20px',
        textAlign: 'left',
    },
};

export default ErrorPage;

          
         

        


       
