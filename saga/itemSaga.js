import {useStore} from '../reducer/itemReducer'
import { itemApi } from '../api'
export const limit = 3

 async function getData(data){
    console.log(data,'day la data');
    const actions = useStore()
    await actions.getRequest({data})
    try {
        let res = await itemApi.getItem(null,null,{activePage:`${data.activePage}&limit=${limit}`})
        console.log(res,'res saga')
        var data = res.listItem
        await actions.getSuccess({data, totalPage: res.totalPage, activePage: res.activePage, skip: res.skip})
    } catch (error) {
        await actions.getFailure(error)
    }
}
async function searchData(data){
    console.log(data,'day la data');
    const actions = useStore()
    await actions.searchRequest({data})
    try {
        let res = await itemApi.searchItem(null,null,{activePage:`${data.activePage}&limit=${limit}&textSearch=${data.nameSearch}`})
        console.log(res,'res saga')
        var data = res.listItem
        await actions.searchSuccess({data, totalPage: res.totalPage, activePage: res.activePage, skip: res.skip, textSearch: res.textSearch})
    } catch (error) {
        await actions.searchFailure(error)
    }
}
async function addData(data){
    console.log(data,'day la data');
    const actions = useStore()
    await actions.addRequest({data})
    try {
        let res = await itemApi.addItem({name:data})
        console.log(res,'res saga')
        await actions.addSuccess()
        await getData({activePage:1})
    } catch (error) {
        await actions.addFailure(error)
    }
}
async function deleteData(data){
    console.log(data,'day la data');
    const actions = useStore()
    await actions.deleteRequest()
    try {
        let res = await itemApi.deleteItem(null,{id:data},null)
        console.log(res,'res saga')
        await actions.deleteSuccess()
        await getData({activePage:1})
    } catch (error) {
        await actions.deleteFailure(error)
    }
}
async function updateData(data){
    console.log(data,'day la data');
    const actions = useStore()
    await actions.updateRequest({data})
    try {
        let res = await itemApi.updateItem({name:data.name},{id:data.id},null)
        console.log(res,'res saga')
        await actions.updateSuccess()
        await getData({activePage:1})
    } catch (error) {
        await actions.updateFailure(error)
    }
}
export {
    getData,
    addData,
    deleteData,
    updateData,
    searchData
}
