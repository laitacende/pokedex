import React from 'react';

export default function GetMoreButton({ getNewLink } : { getNewLink: any }) {
    return (
        <div>
            <button className={"more-button"} onClick={getNewLink}>Show me more!</button>
        </div>
    );
}