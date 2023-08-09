// ResultComponent.js
import React from 'react';

const ResultComponent = ({ relationalModel }) => {
    return (
        <div>
            <h2>Relational Model:</h2>
            {/* Object.entries(relationalModel) ile ilişkisel modelin key-value çiftlerine dönüşüm yapılıyor.
                Daha sonra her bir key-value çifti için TreeNode bileşeni çağrılıyor. */}
            {Object.entries(relationalModel).map(([key, value]) => (
                <TreeNode key={key} name={key} children={value} />
            ))}
        </div>
    );
};
// TreeNode bileşeni, her bir node altında alt öğelerin listesini oluşturmak için kullanılır.
const TreeNode = ({ name, children }) => {
    return (
        <ul>
            <li>
                {name}
                <ul>
                    {children.map((child) => (
                        <li key={child}>{child}</li>
                    ))}
                </ul>
            </li>
        </ul>
    );
};

export default ResultComponent;