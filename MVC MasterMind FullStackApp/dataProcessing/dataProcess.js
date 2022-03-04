mmVariables = {
    date: new Date,
    winningNums: [],   
    prize: [],  
    allNumbers: [],
    numArrDyno: [],  
    objForSelector: {},  
    dynamicStatRange: [],
},
        
    exports.mmFunctions = {
        parseData: (data) => {            
            date={}
            for(e of data){
                date[e[0]]=[e[1],e[2]]
            }          
            return date
        },




        calculate: (arr3 ) => {  //added arr3 argument

            // added below
            mmVariables.date = arr3.map(e =>new Date(e[0].split(' ')).toDateString())
            mmVariables.winningNums = arr3.map(e =>e[1])
            mmVariables.allNumbers = mmVariables.winningNums.join(' ').split(' ').filter(e=>e!='')
            mmVariables.prize = arr3.map(e =>e[2])   
            // added above

            let hash = {}
            for(i of mmVariables.allNumbers){hash[i] = hash[i] +1 || 1 }

            let percentAll = {}
            let weights = {}

            for(e in hash){ percentAll[e]= hash[e]/mmVariables.allNumbers.length }  
            for(e in percentAll){ weights[e] = (percentAll[e]*10000)+2 }

            //creating selector tables
            let rangeS=9999

            for(e in weights){
                mmVariables.numArrDyno.push(e,weights[e], Math.round(rangeS+1), Math.round(weights[e]+rangeS))
                mmVariables.dynamicStatRange.push(Math.round(rangeS+1), Math.round(weights[e]+rangeS))
                rangeS=weights[e]+rangeS
            }
            //selector table as obj for readability
            mmVariables.numArrDyno.forEach((e,i) => { mmVariables.objForSelector[i+1] = e })
            
            return  mmVariables      
        },

        randomAndSearch: ()=> {
            if(mmVariables.numArrDyno.length==0) return
            const min = mmVariables.numArrDyno[2]
            const max = mmVariables.numArrDyno[155]
            let smartPick = []
            
            for(let i=0;i<5;){
                const ranPick = Math.floor(Math.random()*(max-min+1)+min)
                
                //console.log('Min & Max & Random Number',min,max,ranPick)
                if(ranPick>=min && ranPick<=max) {console.log('Random Number in Dyno range',true)} else console.log('Random Number in Dyno range',false)
                
                let diffCurrent=10000
                let nearest
                let selectedNum
                
                for(e of mmVariables.dynamicStatRange){
                    let diff=Math.abs(e-ranPick)
                    if(diff<diffCurrent){diffCurrent=diff; nearest=e} 
                    
                    if(mmVariables.numArrDyno[mmVariables.numArrDyno.indexOf(nearest)-3]<=39){
                        selectedNum=mmVariables.numArrDyno[mmVariables.numArrDyno.indexOf(nearest)-3]
                    }else{
                        selectedNum=mmVariables.numArrDyno[mmVariables.numArrDyno.indexOf(nearest)-2]
                    }
                }
            //removes duplicates  
                smartPick.push(selectedNum) 
                    if (smartPick.indexOf(selectedNum) == smartPick.lastIndexOf(selectedNum)){ 
                    i++      
                    } else { 
                    smartPick.pop(selectedNum)                  
                    }

                //console.log('Min difference',diffCurrent,'Nearest Dynamic value',nearest,'Selected Number',+selectedNum)
            }
     
                //console.log(smartPick)
                //console.log(mmVariables)
                return {smartPick:smartPick.sort((a,b)=>a-b),mmVars:mmVariables}  
                  
            }

    }
 

  
 