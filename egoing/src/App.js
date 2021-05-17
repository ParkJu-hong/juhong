import logo from './logo.svg';
import './App.css';


function App() {
  constructor(props){
	super(props);
	this.state = {
		mode:’welcome’,
		subject:{title:’WEB’, sub: ‘World Wide Web’},
		welcome:{title:’welcome’, desc:’Hello, react!!’},
		contents: [
			{id:1, title: ‘HTML’, desc: ‘HTML is..’},
			{id:2, title: ‘CSS’, desc: ‘CSS is..’},
			{id:3, title: ‘JavaScript’, desc: ‘HTML is..’}
	]
}
render(){
	var _title, _desc = null;
	if(this.state.mode === ‘welcome’){
		_title = this.state.welcome.title;
		_desc = this.state.welcome.desc;
	}else if(this.state.mode === ‘read’){
		_title = this.state.contents[0].title;
		_desc = this.state.contents[0].desc;
	}
	return(
		<div className=“APP”>
		<Subject
			title={this.state.subject.title},
			sub={this.state.subject.sub}>
		</Subject>
    {this.state.contents.map((el) => {
      <div key={el.id}>
      <TOC data={el}></TOC>
      </div>
    })}
		<Content title={_title} desc={_desc}></Content>
		</div>
	)
}
}

export default App;
