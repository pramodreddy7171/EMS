 var StudentAll = React.createClass({ 
  getInitialState: function () {
    return { empname: '' ,empaddress: '',empemail:'',empcontact:'',empid:'',Buttontxt:'Add Employee', empInf: []};
  },
   handleChange: function(ev) {
        this.setState({[ev.target.name]: ev.target.value});
    },

  componentDidMount() {
 
    $.ajax({
       url: "api/getEmployee",
       type: "GET",
       dataType: 'json',
       ContentType: 'application/json',
       success: function(empData) {         
         this.setState({empInf: empData});     
       }.bind(this),
       error: function(err) {    
       }.bind(this)
    });
  },
  
deleteEmployee(empid){
  var empDelete = {
        'empid': empid
           };      
    $.ajax({
      url: "/api/deleteEmployee/",
      dataType: 'json',
      type: 'POST',
      data: empDelete,
      success: function(data) {
        alert(data.data);
        this.componentDidMount();
      }.bind(this),
      error: function(x, status, error) {
         alert(error); 
      }.bind(this),
      });
    },
 


    updateEmployee(item){         
   this.setState({empname: item.empname,empaddress:item.empaddress,empcontact:item.empcontact,empemail:item.empemail,empid:item.empid,Buttontxt:'Update'});
     },

   handleClick: function() {
 
   var Url="";
   if(this.state.Buttontxt=="Add Employee"){
      Url="/api/addEmployee";
       }
      else{
      Url="/api/updateEmployee";
      }
      var empployeeInf = {
        'empname': this.state.empname,
        'empaddress':this.state.empaddress,
        'empemail':this.state.empemail,
        'empcontact':this.state.empcontact,
        'empid':this.state.empid,
        
    }
    $.ajax({
      url: Url,
      dataType: 'json',
      type: 'POST',
      data: empployeeInf,
      success: function(data) {       
          alert(data.data);       
          this.setState(this.getInitialState());
          this.componentDidMount();
      }.bind(this),
      error: function(x, status, error) {
         alert(error);     
      }.bind(this)
    });
  },

  render: function() {
    return ( 
      <div  className="container"  style={{marginTop:'60px'}}>
       <p className="text-center" style={{fontSize:'35px'}}><b>Employee Management System</b></p>
  <form>
    <div className="col-sm-11 col-md-11"  style={{marginLeft:'350px'}}> 
  <table className="table-bordered">
     <tbody>
    <tr>
      <td><b>Employee Name:</b></td>
      <td>
         <input className="form-control" type="text" value={this.state.empname}    name="empname" onChange={ this.handleChange } />
          <input type="hidden" value={this.state.empid}    name="empid"  />
      </td>
    </tr>
    <tr>
      <td><b>Employee Mobile No:</b></td>
      <td>
        <input type="text"  className="form-control" value={this.state.empcontact}  name="empcontact" onChange={ this.handleChange } />
      </td>
    </tr>
	<tr>
      <td><b>Employee Mail:</b></td>
      <td>
        <input type="text"  className="form-control" value={this.state.empemail}  name="empemail" onChange={ this.handleChange } />
      </td>
    </tr>
    <tr>
      <td><b>Employee Address:</b></td>
      <td>
      <input type="text" className="form-control" value={this.state.empaddress}  name="empaddress" onChange={ this.handleChange } />
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        <input className="btn btn-primary" type="button" value={this.state.Buttontxt} onClick={this.handleClick} />
      </td>
    </tr>

 </tbody>
    </table>
</div>
 

<div className="col-sm-11 col-md-11 "  style={{marginTop:'60px',marginLeft:'350'}} >
 
 <table className="table-bordered"><tbody>
   <tr><th><b>Employee No</b></th><th><b>Employee Name</b></th><th><b>Employee Mobile No</b></th><th><b>Employee Mail</b></th><th><b>Employee Address</b></th><th><b>Update</b></th><th><b>Delete</b></th></tr>
    {this.state.empInf.map((item, index) => (
        <tr key={index}>
           <td>{index+1}</td> 
          <td>{item.empname}</td>   
          <td>{item.empcontact}</td>		  
          <td>{item.empemail}</td>
          <td>{item.empaddress}</td>
           <td> 
          
           <button type="button" className="btn btn-success" onClick={(e) => {this.updateEmployee(item)}}>Update</button>    
          </td> 
          <td> 
             <button type="button" className="btn btn-info" onClick={(e) => {this.deleteEmployee(item.empid)}}>Delete</button>
          </td> 
        </tr>
    ))}
    </tbody>
    </table>
     </div>
</form>        
      </div>
    );
  }
});

ReactDOM.render(<StudentAll  />, document.getElementById('main'))