import React, { useState } from 'react'

export default function Textarea(props) {
    const [text, newText] = useState('')

    const handleOnChange = (event) => {
        newText(event.target.value);
    }
    const toUpperCase = () => {
        let ntext = text.toUpperCase();
        if (ntext.length === 0) {
            props.showAlert('Please provide input in the text area to convert it into Uppercase.');
        }
        newText(ntext);

    }

    const toLowerCase = () => {
        let ntext = text.toLowerCase();
        if (ntext.length === 0) {
            props.showAlert('Please provide input in the text area to convert it into Lowercase.');
        }
        newText(ntext);
    }
    const clear = () => {
        newText('');
    }

    const CaptializeCase = () => {
        if (text.length === 0) {
            props.showAlert('Please provide input in the text area.');
        }
        let ntext = text.toLowerCase().split(' ');

        for (let i = 0; i < ntext.length; i++) {
            ntext[i] = ntext[i].charAt(0).toUpperCase() + ntext[i].substring(1);
        }
        let ntext1 = ntext.join(' ');
        newText(ntext1);
    }

    const SentenceCase = () => {
        if (text.length === 0) {
            props.showAlert('Please provide input in the text area.');
        }
        let ntext = text.toLowerCase().split('.');
        for (let i = 0; i < ntext.length; i++) {
            ntext[i] = ntext[i].charAt(0).toUpperCase() + ntext[i].substring(1);
        }
        let ntext1 = ntext.join('.');
        newText(ntext1);
    }

    const TitleCase = () => {
        if (text.length === 0) {
            props.showAlert('Please provide input in the text area.');
        }
        const ignoredWords = ["a", "an", "and", "as", "at", "but", "by", "for", "if", "in", "nor", "of", "on", "or", "so", "the", "to", "up", "yet"];
        let ntext = text.toLowerCase().split(' ');

        for (let i = 0; i < ntext.length; i++) {
            if (ignoredWords.includes(ntext[i])) {
                continue;
            }
            ntext[i] = ntext[i].charAt(0).toUpperCase() + ntext[i].substring(1);
        }
        let ntext1 = ntext.join(' ');
        newText(ntext1);
    }

    const alternatingCase = () => {
        if (text.length === 0) {
            props.showAlert('Please provide input in the text area.');
        }
        let ntext = text.toLowerCase().split(' ');

        for (let i = 0; i < ntext.length; i++) {
            let word = ntext[i];
            let alternatingWord = '';
            for (let j = 0; j < word.length; j++) {
                if (j % 2 === 0) {
                    alternatingWord += word.charAt(j).toLowerCase();
                } else {
                    alternatingWord += word.charAt(j).toUpperCase();
                }
            }
            ntext[i] = alternatingWord;
        }
        let ntext1 = ntext.join(' ');
        newText(ntext1);
    }

    const inverseCase = () => {
        if (text.length === 0) {
            props.showAlert('Please provide input in the text area.');
        }
        let ntext = text.toLowerCase().split(' ');
        for (let i = 0; i < ntext.length; i++) {
            let word = ntext[i];
            let alternativeWord = '';
            for (let j = 0; j < word.length; j++) {
                if (j % 2 === 0) {
                    alternativeWord += word.charAt(j).toUpperCase();
                } else {
                    alternativeWord += word.charAt(j).toLowerCase();
                }
            }
            ntext[i] = alternativeWord;
        }
        let ntext1 = ntext.join(' ');
        newText(ntext1);
    }

    const copyClipboard = () => {

        if (text.length === 0) {
            props.showAlert('Please provide input in the text area.');
        }
        navigator.clipboard.writeText(text);
    }

    const handleExtraSpaces = () => {
        if (text.length === 0) {
            props.showAlert('Please provide input in the text area.');
        }
        let nText = text.split(/[ ]+/);

        newText(nText.join(" "))
    }

    const downloadTxtFile = () => {
        if (text.length === 0) {
            props.showAlert('Please provide input in the text area.');
            return;
        }
        // Create a blob containing the text
        const blob = new Blob([text], { type: 'text/plain' });

        // Create a link element
        const link = document.createElement('a');

        // Set the download attribute and file name
        link.download = `TextModulate_case.txt`;

        // Set the link's href attribute to the blob
        link.href = window.URL.createObjectURL(blob);

        // Append the link to the document body
        document.body.appendChild(link);

        // Trigger the click event of the link
        link.click();

        // Remove the link from the document body
        document.body.removeChild(link);
    };

    return (
            <div className="container " style={{ color: props.mode === 'light' ? '#152536' : 'white' }}>
                <h4 className='my-4'>Enter the Text that should be analyzed.....</h4>
                <div>
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#1b2d40', color: props.mode === 'light' ? 'black' : 'white' }} placeholder='Enter your text here....' rows="10"></textarea>
                </div>
                <button type="button" onClick={toUpperCase} className="btn btn-primary my-3 mx-2">Convert to UpperCase</button>
                <button type="button" onClick={toLowerCase} className="btn btn-primary my-3 mx-2">Convert to LowerCase</button>
                <button type="button" onClick={CaptializeCase} className="btn btn-primary my-3 mx-2">Capitalized Case</button>
                <button type="button" onClick={SentenceCase} className="btn btn-primary my-3 mx-2">Sentence Case</button>
                <button type="button" onClick={TitleCase} className="btn btn-primary my-3 mx-2">Title Case</button>
                <button type="button" onClick={alternatingCase} className="btn btn-primary my-3 mx-2">aLtErNaTiNg cAse</button>
                <button type="button" onClick={inverseCase} className="btn btn-primary my-3 mx-2">InVeRsE CaSe</button>
                <button type="button" disabled={text.length === 0} onClick={copyClipboard} className="btn btn-primary my-3 mx-2">Copy to Clipboard</button>
                <button type="button" onClick={handleExtraSpaces} className="btn btn-primary my-3 mx-2">Remove Extra Spaces</button>
                <button type="button" disabled={text.length === 0} onClick={downloadTxtFile} className="btn btn-primary my-3 mx-2">Download Text</button>
                <button type="button" disabled={text.length === 0} onClick={clear} className="btn btn-primary my-3 mx-2">clear</button>

                <div className=' my-3'>
                    <h2>Your Text Summary</h2>
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} Characters</p>
                    <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>

                </div>

            </div>


    )
}
