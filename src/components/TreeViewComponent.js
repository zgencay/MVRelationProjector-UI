// components/TreeViewComponent.js
import React from 'react';
import TreeNode from './ResultComponent';

//Relational Model'i tree yapısında görüntülemek için
const TreeViewComponent = ({relationalModel}) => {
    return (
        <div>
            {/* Object.entries(relationalModel) ile ilişkisel modelin key-value çiftlerine dönüşüm yapılıyor.
                Daha sonra her bir key-value çifti için TreeNode bileşeni çağrılıyor. */}
            {Object.entries(relationalModel).map(([key, value]) => (
                <TreeNode name={key} children={value}/>
            ))}
        </div>
    );
};

export default TreeViewComponent;
