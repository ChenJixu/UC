export default function confirm({api,type,id,list}) {
  let  newState = Object.assign({},this.state[list]);
    fetch(api,{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({type,id})
    })
    .then((res) => res.json())
    .then((res) => {
      newState.data = res.result;
      this.setState({[list]: newState});
    });
}
