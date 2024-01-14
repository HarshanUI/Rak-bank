const OverviewSlide = ({
    overviewHeader, overviewList, overviewComment, onOverviewSubmit
}) => {

    const renderList =() => {
        return overviewList.map((item)=>(
            <div className='overview-list'>
              <div className='overview-list-content'>
                  <h3> {item.title} </h3>
                  <p>{item.subTitle}</p>
              </div>
              <div className='overview-list-icon'>
                  <spen>{item.isLike ? "👎" : "👍"}</spen>
              </div>
          </div>
        ))
    }
    return (
        <div className='overview-container'>
        <h2 className='overview-header'>{overviewHeader}</h2>
        {renderList()}
        <div className='overview-list-last'>
            <div className='overview-list-content'>
                <h3> {overviewComment.title} </h3>
            </div>
            <div className='overview-list-icon'>
                <spen>{overviewComment.icon}</spen>
            </div>
        </div>
        <div className='overview-submit' >
            <button onClick={onOverviewSubmit}>Submit</button>
        </div>
    </div>
    )
}
export {OverviewSlide}