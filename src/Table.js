import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./Table.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import ReactDOM from "react-dom";
import { mkdirSync } from "fs";


export  default function Table(model, levelPravil, changeList, changeCoeff,selectedTM) {
  let tempus=[[]]
  let gettingLevelPravil = levelPravil

 
  let select = selectedTM
  if (select == undefined)
  select = 1

  if(typeof(gettingLevelPravil) != "string")
  {
    gettingLevelPravil =1 
  
  }
  
function cartesian2(arg) {
  var r = [], args = arg;
  args.reduceRight(function(cont, factor, i) {
      return function(arr) {
          for (var j=0, l=factor.length; j<l; j++) {
              var a = arr.slice(); // clone arr
              a[i] = factor[j];
              cont(a);
          }
      };
  }, Array.prototype.push.bind(r))(new Array(args.length));
let t = r.length 
  return r;
}
let my = model


if(my.TM == undefined)
my = {   
  options: {
    name: "tm 1",
    urovneyObrabotki: 3,
  },
  TM: 
  [
    {
        id: '1',
        name: '1212',
        termsCount:3,
        termsNames: {term1: '1212', term2: '1212', term3:'sd',},
        coords:[{x1:0, y1:0, x2:1, y2:1, x3:1, y3:5},
                {x1:2, y1:0, x2:3, y2:1, x3:3, y3:5 },
                {x1:4, y1:0, x2:5, y2:2, x3:6, y3:2, x4:7, y4:0 } ,       
              ],    
              plotsColors:['#000000','#000000','#FF00D0',] ,   
    },
    {
      id: '2',
      name: 'tm2',
      termsCount:3,
      termsNames: {term1: 'dfdf', term2: 'dfdf', term3:'?dfdf',},
      coords:[{x1:0, y1:0, x2:1, y2:1, x3:2, y3:0},
              {x1:2, y1:0, x2:3, y2:1, x3:4, y3:0 },
              {x1:4, y1:0, x2:5, y2:1, x3:6, y3:0, } ,        
            ],    
            plotsColors:['#00FF00','#E30202','#FF00D0',] ,     

    },
    {
      id: '3',
      name: 'dfdf',
      termsCount:3,
      termsNames: {term1: 'dfdf', term2: 'dfdf', term3:'dfdf',},
      coords:[{x1:0, y1:0, x2:1, y2:1, x3:2, y3:0},
              {x1:2, y1:0, x2:3, y2:1, x3:4, y3:0 },
              {x1:4, y1:0, x2:5, y2:1, x3:6, y3:0, } ,        
            ],    
            plotsColors:['#00FF00','#E30202','#FF00D0',] ,     

    },
  ]  ,
  pravila_end: 
  {1:['1_1...1_1',
  '1_2...2_0.8',
  '1_3...1_0.9',

  '2_1...2_0.7',
  '2_2...1_0.9',
  '2_3...2_1',

  '3_1...1_0.9',
  '3_2...1_0.8',
  '3_3...2_0.9',
  


  ], }}
 
  const shapka= [];
/*

<th>№</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
*/
  
  let termsInputArray2=[[]]
  let tempArray=[]
  let selectedArray=[]
  let otarray=[
    {
          id: '1',
          name: '1212',
          termsCount:3,
          termsNames: {term1: '1212', term2: '1212', term3:'sd',},
          coords:[{x1:0, y1:0, x2:1, y2:1, x3:1, y3:5},
                  {x1:2, y1:0, x2:3, y2:1, x3:3, y3:5 },
                  {x1:4, y1:0, x2:5, y2:2, x3:6, y3:2, x4:7, y4:0 } ,       
                ],    
                plotsColors:['#000000','#000000','#FF00D0',] ,   
      },
      {
        id: '2',
        name: 'tm2',
        termsCount:3,
        termsNames: {term1: 'dfdf', term2: 'dfdf', term3:'?dfdf',},
        coords:[{x1:0, y1:0, x2:1, y2:1, x3:2, y3:0},
                {x1:2, y1:0, x2:3, y2:1, x3:4, y3:0 },
                {x1:4, y1:0, x2:5, y2:1, x3:6, y3:0, } ,        
              ],    
              plotsColors:['#00FF00','#E30202','#FF00D0',] ,     
      },
      {
        id: '3',
        name: 'dfdf',
        termsCount:3,
        termsNames: {term1: 'dfdf', term2: 'dfdf', term3:'dfdf',},
        coords:[{x1:0, y1:0, x2:1, y2:1, x3:2, y3:0},
                {x1:2, y1:0, x2:3, y2:1, x3:4, y3:0 },
                {x1:4, y1:0, x2:5, y2:1, x3:6, y3:0, } ,        
              ],    
              plotsColors:['#00FF00','#E30202','#FF00D0',] ,   
      },
    ]  
  let doarray=[   
      {
          id: '1',
          name: '1212',
          termsCount:3,
          termsNames: {term1: '1212', term2: '1212', term3:'sd',},
          coords:[{x1:0, y1:0, x2:1, y2:1, x3:1, y3:5},
                  {x1:2, y1:0, x2:3, y2:1, x3:3, y3:5 },
                  {x1:4, y1:0, x2:5, y2:2, x3:6, y3:2, x4:7, y4:0 } ,       
                ],    
                plotsColors:['#000000','#000000','#FF00D0',] ,    
      },
      {
        id: '2',
        name: 'tm2',
        termsCount:3,
        termsNames: {term1: 'dfdf', term2: 'dfdf', term3:'?dfdf',},
        coords:[{x1:0, y1:0, x2:1, y2:1, x3:2, y3:0},
                {x1:2, y1:0, x2:3, y2:1, x3:4, y3:0 },
                {x1:4, y1:0, x2:5, y2:1, x3:6, y3:0, } ,        
              ],    
              plotsColors:['#00FF00','#E30202','#FF00D0',] ,     
      },
      {
        id: '3',
        name: 'dfdf',
        termsCount:3,
        termsNames: {term1: 'dfdf', term2: 'dfdf', term3:'dfdf',},
        coords:[{x1:0, y1:0, x2:1, y2:1, x3:2, y3:0},
                {x1:2, y1:0, x2:3, y2:1, x3:4, y3:0 },
                {x1:4, y1:0, x2:5, y2:1, x3:6, y3:0, } ,        
              ],    
              plotsColors:['#00FF00','#E30202','#FF00D0',] ,     
      },
    ]     
  //otarray.push(my.TM[0])
  //otarray.push(my.TM[1])
  //doarray.push(my.TM[2])

if(model.TM!=undefined)
{
  otarray = []
  doarray=[]
  let toNode = selectedTM  
  let massivFrom =[] 
   
  for(let i = 0; i < my.graph.edges.length; i ++)
        {
          if(my.graph.edges[i].to == Number(toNode))
          {
            massivFrom.push(my.graph.edges[i].from )
          }
        }
  
        for(let i = 0; i <massivFrom.length; i ++)
        {
          for(let j = 0; j <my.TM.length; j ++)
          {
            if(my.TM[j].id == Number(massivFrom[i]-1))
          {
            otarray.push(my.TM[j])
          }
  
          }
  
        }
        for(let i = 0; i < my.TM.length; i ++)
        {
          if(my.TM[i].id == Number(toNode-1))
          { 
            doarray.push(my.TM[i])
          }
        }
} else {
}
 
  
   let otKokogo = otarray//eval("my.TM")// dfdf
  let doKokogo =doarray

 
  
  shapka.push(<th>tm</th>)
  for(let i = 0; i < otarray.length; i++)
  {
   let  name = otarray[i].name
shapka.push(<th>{otarray[i].name}</th>)

  }

  for(let i = 0; i < doarray.length; i++)
  {
   let  name = doarray[i].name
shapka.push(<th>{doarray[i].name}</th>)

  }

 
  for(let i = 0; i < otKokogo.length; i++)
{    
  
  for(let j = 0; j < otKokogo[i].termsCount; j++)
  {    
    console.log(otKokogo[i].termsNames)
    let termName = otKokogo[i].termsNames['term'+String(j+1)]     
    tempArray[j] = termName
           
  } 
    termsInputArray2[i]=(tempArray)    
    tempArray = []  
}

termsInputArray2 =cartesian2(termsInputArray2)

termsInputArray2.map((el)=> (el.push("...")))

  for(let i = 0; i < doKokogo.length; i++)
  {    termsInputArray2.map((el)=> (

    el.push(1)
    
    ))

    for(let j = 0; j <doKokogo[i].termsCount; j++)
    {     
      let termName = doKokogo[i].termsNames['term'+String(j+1)]      
      tempArray[j] = {id: (j+1), name :termName}     

    } 
    selectedArray[i]=(tempArray)    
      tempArray = []  
  }
 

for(let i = 0; i < doKokogo.length; i++)
{    let tempArray=[]
  for(let j = 0; j < doKokogo[i].termsCount; j++)
  {     
    let termName = doKokogo[i].termsNames['term'+String(j+1)]     
    tempArray[j] = {id: (j+1), name :termName}     

  } 
  selectedArray[i]=(tempArray)    
    tempArray = []  
}
console.log(selectedTM)
let urPravil = eval("my.pravila_end[" +selectedTM+"]") 
if(urPravil!= undefined)
  {
    
    
    for(let i =0; i<urPravil.length;i++)
    {
      let temp 
      let temp2 =[]
      for(let j=0; j< urPravil[i].split("...")[0].split("_").length+1; j++)    
    {
      let termName
        if(j==0)
termName = i+1
        else{ temp= urPravil[i].split("...")[0].split("_")[j-1]
         termName = eval("otKokogo["+(j-1)+"].termsNames['term"+(temp)+"']") 
       
  }
  temp2[j] = termName

    }

  tempus[i] = temp2
  
    

   
  
  

  }}



  const ChangeSelect = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
   let location = event.target.id.split("__")[0].split("_")[0]
 let row = event.target.id.split("__")[0].split("_")[1]
 let position = event.target.id.split("__")[1]
 position = position.split("/")[0]
changeList(row, position,event.target.options[event.target.selectedIndex].id, select)

for(let i = 0; i<termsInputArray2[row-1].length; i++ )
{

if(termsInputArray2[position-1][i] == "...")
{
  termsInputArray2[position-1][Number(Number(i)+Number(position))] = Number(event.target.options[event.target.selectedIndex].id)
  break

}}};

const ChangeCoeff= (event) => {
  event.preventDefault();

let val = event.target.value

 // const fieldName = event.target.getAttribute("name");
 let location = event.target.id.split("__")[0].split("_")[0]
let row = event.target.id.split("__")[0].split("_")[1]
let position = event.target.id.split("__")[1]
let urovPravil =  select//event.target.id.split("__")[0].split("_")[0]
position = position.split("/")[0]
changeCoeff(row, position,val,urovPravil)
console.log("row="+row)
console.log("position="+position)
console.log("urovPravil="+urovPravil)


/*
for(let i = 0; i<termsInputArray2[location-1].length; i++ )
{

if(termsInputArray2[location-1][i] == "...")
{
termsInputArray2[location-1][Number(Number(i)+Number(position))] = Number(event.target.options[event.target.selectedIndex].id)
break

}}*/
};
let prav

prav = eval("my.pravila_end")
console.log(prav)


  //console.log(termsInputArray)

 //console.log(cartesian(i1)) 

  return (
    <div className="app-container">
      <form >
        <table>
          <thead>
            <tr>
                {shapka}
              
            </tr>
          </thead>
          <tbody>
            {/*contacts.map((contact) => (
              <Fragment>
                { <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />}
              </Fragment>
            ))*/}
            {
                      tempus.map((stroke,index) => (
                        <Fragment>
                          { <ReadOnlyRow
                              stroke={stroke}
                               array= {selectedArray}
                               change = {ChangeSelect}
                               urovenPravil = {levelPravil}
                               index = {index+1}
                               pravila = {prav[Number(select)][index]}   
                               changeCoeff = {ChangeCoeff}                            
                            />}
                        </Fragment>
                        
                      ))


            }
          </tbody>
        </table>
      </form>

   
    </div>
  );
};


ReactDOM.render(<Table />, document.querySelector("#root"));
