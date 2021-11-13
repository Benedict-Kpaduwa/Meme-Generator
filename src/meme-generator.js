import React from "react";

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/lbfj.jpg",
            allMemesImgs: []
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({allMemesImgs: memes})
            })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit(event){
        event.preventDefault()

        const randNum = (Math.floor()*this.state.allMemesImgs.length)
        const randMemeImg = this.state.allMemeImg[randNum].url
        this.setState({randomImg: randMemeImg})
    }

    render() {
        return(
            <div>
                <form className= "meme-form" onSubmit={this.handleSubmit}>

                    <input 
                        type="text"
                        name="topText"
                        placeholder="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div>
                    <img src={this.state.randomImg} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator