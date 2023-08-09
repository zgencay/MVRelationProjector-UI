// App.js
import React, {Component} from 'react';
import './App.css';
import logo from './images/innova-logo.png';
import background from './images/innova-background.jpg';

import {getParsedResults} from './services/ApiServices'; // Service dosyamızı ekledik
import ResultComponent from './components/ResultComponent'; // ResultComponent import edildi

class App extends Component {
    state = {
        selectedFile: null,
        relationalModel: null, // State'e relationalModel'i ekleyelim
    };

    onFileChange = (event) => {
        this.setState({ selectedFile: event.target.files[0] });

    };



    onFileUpload = async () => {
        try {
            const relationalModel = await getParsedResults(this.state.selectedFile);
            this.setState({ relationalModel });
        } catch (error) {
            console.error('Error uploading the file:', error);
        }
    };

    fileData = () => {
        if (this.state.relationalModel) { // state'te alınan relationalModel'i kontrol edelim
            return (
                <div>
                    <h2>Relational Model:</h2>
                    <ul>
                        {Object.entries(this.state.relationalModel).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key}:</strong> {value.join(', ')}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose your file before pressing the "Upload The File" button</h4>
                </div>
            );
        }
    };

    render() {
        const backgroundStyle = {
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
        };

        return (
            <div style={backgroundStyle}>
                <div>
                    <img src={logo} alt="Innova Bilişim Çözümleri" />
                    <h1>INNOVA BİLİŞİM ÇÖZÜMLERİ</h1>
                    <h3>Please Upload Your File</h3>
                    <div>
                        <input type="file" onChange={this.onFileChange} />
                        <button onClick={this.onFileUpload}>Upload The File</button>
                    </div>
                    {this.state.relationalModel && (
                        <ResultComponent relationalModel={this.state.relationalModel} />
                    )}
                </div>
            </div>
        );
    }
}

export default App;