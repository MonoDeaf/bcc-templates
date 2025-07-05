// Utility Functions

export function processMessage(message) {
    const placeholders = {
        '{ARTIST_NAME}': 'Artist Name',
        '{TRACK_NAME}': 'Track Title',
        '{LABEL_NAME}': 'Your Label Name',
        '{DATE}': new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        }),
        '{REASON}': 'Specific reason/details here'
    };
    
    let processedMessage = message;
    Object.entries(placeholders).forEach(([placeholder, replacement]) => {
        processedMessage = processedMessage.replace(new RegExp(placeholder, 'g'), replacement);
    });
    
    return processedMessage;
}

export function showToast(message, toastElement, toastMessageElement) {
    toastMessageElement.textContent = message;
    toastElement.classList.add('show');
    setTimeout(() => {
        toastElement.classList.remove('show');
    }, 3000);
}

export function copyToClipboard(text, onSuccess, onError) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(onSuccess).catch(err => {
            console.error('Failed to copy: ', err);
            fallbackCopyTextToClipboard(text, onSuccess, onError);
        });
    } else {
        fallbackCopyTextToClipboard(text, onSuccess, onError);
    }
}

function fallbackCopyTextToClipboard(text, onSuccess, onError) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        onSuccess();
    } catch (err) {
        console.error('Fallback: Could not copy text: ', err);
        onError();
    }
    
    document.body.removeChild(textArea);
}

