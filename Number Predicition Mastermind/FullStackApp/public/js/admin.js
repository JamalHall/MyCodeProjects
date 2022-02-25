
    // this will then display a text file in the DOM //
    document.querySelector('.content').innerText = ' [ ' + smartPick.sort((a,b)=>a-b)+' ] ' + content.innerText
    console.log('Smart pick length',smartPick.length) 


    // {smartPick: data, newDate: date, authStatus: req.oidc.isAuthenticated(), user: req.oidc.user,})