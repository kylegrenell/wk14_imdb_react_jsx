var React = require('react');
var ListItem = require("./ListItem.jsx");

var filmData = [
  {
    name: "La La Land", url:"http://www.imdb.com/title/tt3783958/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=00VB42R51YRNX56XG2V4&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t0"
  },
  {
    name: "Manchester By The Sea", url:"http://www.imdb.com/title/tt4034228/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=00VB42R51YRNX56XG2V4&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t1"
  },  
  {
    name: "Sausage Party", url:"http://www.imdb.com/title/tt1700841?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=10B79GWTXE5MERRSR82F&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t0"
  },
  {
    name: "Café Society", url:"http://www.imdb.com/title/tt4513674?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=10B79GWTXE5MERRSR82F&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t1"
  },
  {
    name: "Live by Night", url:"http://www.imdb.com/title/tt2361317/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=00VB42R51YRNX56XG2V4&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t2"
  },
  {
    name: "Ok Jaanu", url: "http://www.imdb.com/title/tt5764024/"
  }
]

var ListBox = React.createClass({

  getInitialState(){
    return {data: filmData}
  },

  render:function (){
    return (
      <div className='list-box'>
      <p className="title"> Australian Openings this Week </p>
      <ListItem className="list-item" data={this.state.data} href={this.state.url}/>
      <br />
      <a href="http://www.imdb.com/calendar/?region=gb&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=011BDW7VB6J9P5KHRY2D&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_sm">See more opening this week
      </a>
      <br />
      <br />
      <a href="http://www.imdb.com/showtimes/AU/2289">
          <button>Get Show Times</button>
      </a>
      </div>
      )
  },

});

module.exports = ListBox;