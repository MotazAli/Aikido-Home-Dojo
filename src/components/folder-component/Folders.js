import React from 'react';
import Folder from './Folder';

const Folders = props => (props.items.map( item => 
                                <Folder key={item.ID}
                                        id={item.ID}  
                                        name={item.Name} 
                                        image={item.Image}
                                        fbURL={item.FacebookURL}
                                        instaURL={item.InstagramURL} 
                                        teamTypeName={item.TeamType.Name} />));

export default Folders;