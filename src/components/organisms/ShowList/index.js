import React, { Component } from 'react';

export default class ShowList extends Component {
    render(){
        return(
            <div>
               <ol>
                   <li>
                       Buy T-Shirt <button>edit</button><button>delete</button>
                   </li>
                   <li>
                       Buy Redbull <button>edit</button><button>delete</button>
                   </li>
                   <li>
                       Do Laundry <button>edit</button><button>delete</button>
                   </li>
                

               </ol>
            </div>
        )
    }
}