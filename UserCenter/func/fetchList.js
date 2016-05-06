export default function fetchList({api,index,list,action}) {
  let  newState = Object.assign({},this.state[list]);
  let prams;
  if (index) {
      prams = {
      pageIndex: 0,
      pageSize: 10,
      index
    }
  } else {
    prams = {
      pageIndex: 0,
      pageSize: 10,
    }
  }

  fetch(api,{
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(prams)
  })
  .then((res) => res.json())
  .then((res) => {
    let total = res.total;
    newState.data = res.result;
    newState.total = total;
    this.setState({[list]: newState});
  });
}
