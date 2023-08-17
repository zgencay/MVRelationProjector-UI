// ResultComponent.js
import React from 'react';
import TreeMenu from 'react-simple-tree-menu';

//TreeNode bileşeni her bir node'u temsil ediyor
const TreeNode = ({ name, children }) => {
    return (
        <ul>
            <li>
                {name}
                <ul>
                    {/* Her bir child düğümü için bir <li> öğesi oluşturulur */}
                    {children.map((child) => (
                        <li key={child}>{child}</li>
                    ))}
                </ul>
            </li>
        </ul>
    );
};

// <TreeMenu data={treeData} />

// Use any third-party UI framework


const ResultComponent = ({ relationalModel }) => {
    return (
        <div>
            <h2>Relational Model:</h2>
            {
                <TreeMenu data={relationalModel} />
            }

            {/*/!*Relational Model'deki her bir key-value çifti için TreeNode çağırılır*!/*/}
            {/*{Object.entries(relationalModel).map(([key, value]) => (*/}
            {/*    <TreeNode name={key} children={value} />*/}
            {/*))}*/}
        </div>
    );
};

export default ResultComponent;
