function handleSort(arr){
    return arr.sort((a, b)=>{
        let aa = a.post.toLowerCase()
        let bb = b.post.toLowerCase()
        return aa > bb ? -1 : aa < bb ? 1 : 0
    })
}

export default handleSort