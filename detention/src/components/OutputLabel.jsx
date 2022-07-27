function OutputLabel() {
    const writeMyLines = () => {
        let lines = []

        for (let i = 0; i < 100; i++) {
            let line = "I will never mutate state or props directly"
            lines.push(<p>{ line }</p>)
            }
        
        return lines
    }

    return (
        <div>
            <p>{ writeMyLines() }</p>
        </div>
    )
}

export default OutputLabel