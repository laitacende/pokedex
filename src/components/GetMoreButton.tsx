import React from 'react';

export default function GetMoreButton({ getNewLink } : { getNewLink: any }) {
    return (
        <div>
            <button onClick={getNewLink}>More...</button>
        </div>
    );
}