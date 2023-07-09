function clickLink(newURL){
    //Store the current URL, then load new URL
    browser.history.push(currentURL);
    currentURL=newURL;
    load(currentURL);
}

function clickBack(){
    //retrieve the most recently visited page and load it
    currentURL = browser.history.pop();
    load(currentURL);
}
