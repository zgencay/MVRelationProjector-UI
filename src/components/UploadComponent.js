import React, {useState} from "react";
import ApiService from "../services/ApiServices";

// File upload için kullanılacak olan UploadComponent'ımız
const UploadComponent=() => {
    // File seçmek için state
    const [selectedFile, setSelectedFile] = useState(null);

    // File seçildiği zaman çalıaşacak fonksiyon
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // File'ı yüklemek için kullanılacak fonksiyon
    const handleUpload = async() => {
        try{
            // File seçilmiş mi seçilmemiş mi kontrol et
            if(selectedFile){

                // ApiService'le file'ı yükleyip resul'ı al
                const result = await ApiService.getParsedResults(selectedFile);

                //Result Component'a göndermek için burda 'resultt' degiskeni kullanılabilir
                console.log('Sonuç:',result);
            }else{
                // File seçilmediyse hata mesajı
                console.log('File seçilmedi!!');

            }
        } catch(error){ // hata oluşursa mesajı concole'a yazdır

            console.error('File upload hatası', error);
        }
    };

    return (
        <div>
            {/* File seçmek için input alanı */}
            <input type="file" onChange={handleFileChange}/>

            {/* File upload etmek için button */}
            <button onClick={handleUpload}>File'ı Yükle</button>
        </div>

    );
};

export default UploadComponent;