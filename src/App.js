// App.js

import React, {Component} from 'react';
import './App.css';
import logo from './images/innova-logo.png';
import background from './images/innova-background.jpg';

import {getParsedResults} from './services/ApiServices';
import ResultComponent from './components/ResultComponent';
import TreeMenu from "react-simple-tree-menu";

class App extends Component {
    state = {
        selectedFile: null,
        relationalModel: null,
        showChooseFileMessage: false,
    };

    onFileChange = (event) => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    onFileUpload = async () => {
        if (!this.state.selectedFile) {
            this.setState({ showChooseFileMessage: true });
            return;
        }

        try {
            const relationalModel = await getParsedResults(this.state.selectedFile);
            this.setState({ relationalModel, showChooseFileMessage: false });
        } catch (error) {
            console.error('Error uploading the file:', error);
        }
    };

    fileData = () => {
        if (this.state.relationalModel) {
            return <ResultComponent relationalModel={this.state.relationalModel} />;
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
            <React.Fragment >
                <React.Fragment>
                    <img src={logo} alt="Innova Bilişim Çözümleri" />
                    <h1>INNOVA BİLİŞİM ÇÖZÜMLERİ</h1>
                    <h3>Please Upload Your File</h3>
                    <div>
                        <input type="file" onChange={this.onFileChange} />
                        <button onClick={this.onFileUpload}>Upload The File</button>
                    </div>
                    {this.state.showChooseFileMessage && (
                        <p style={{ color: 'red' }}>Choose The File First!</p>
                    )}
                    {/* TreeViewComponent'ını çağırarak parse edilen verileri göster */}
                    {this.state.relationalModel && (
                        // <ResultComponent relationalModel={this.state.relationalModel} />
                        <TreeMenu data={this.state.relationalModel}
                                  debounceTime={125}
                                  disableKeyboard={false}
                                  hasSearch
                                  cacheSearch={false}
                                  onClickItem={function noRefCheck(){}}
                                  resetOpenNodesOnDataUpdate={true} />
                    )}
                </React.Fragment>
            </React.Fragment>
        );
    }
}

export default App;
