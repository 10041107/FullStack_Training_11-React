import { deleteMenu, getMenu, getMenulist, modifyMenu, registMenu } from "../modules/MenuModule";
import { request } from "./Api";


export function callGetMenuListAPI(){
    console.log("getMenuList api calls ");

    return async(dispatch, getState) =>{
        const result = await request("get", "/menu");
        console.log("getMenulist result : ", result);

        dispatch(getMenulist(result));
    }
}

export function callGetMenuAPI(id){
    console.log("getMenu api calls.. ");

    return async(dispatch, getState) => {
        const result = await request("GET", "/menu/"+id);
        console.log("getMenu result : ", result);
        dispatch(getMenu(result));
    }
}

export function callRegistMenuApi(menu){
    console.log(`regisMenu api calls...`);
    
    return async(dispatch, getState) =>{
        const result = await request("POST", `/menu`, menu);
        console.log("registMenu result : ", result);
        dispatch(registMenu(result));
    }
}


export function callModifyMenuAPI(menu){
    console.log("modifyMEnu api call");


    return async (dispatch, getState)=>{
        const result = await request("PUT", `/menu/${menu.id}`,menu);
        console.log("modifyMenu result : ", result);
        dispatch(modifyMenu(result));
    }
}



export function callDeleteMenuAPI(id){
    console.log("delete Menu api calll......");


    return async (dispatch, getState) =>{
        const result  = await request("DELETE", "/menu/"+ id);
        console.log("deleteMenu result " + result);

        dispatch(deleteMenu(result));
    }
}