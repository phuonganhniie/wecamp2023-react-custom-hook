import useFetch from "../hooks/useFetch";
import "./Quote.css";

const Quote = (props) => {
  const { fetchData, data, error, loading } = useFetch(props.url);

  return (
    <>
      <div>
        <button onClick={fetchData}>Get New Quote</button>
        {loading && <p>Loading...</p>}
        <div className="card-container">
          {data && (
            <div key={data._id} className="card">
              <div className="card-header">{data.author}</div>
              <div className="card-body">{`"${data.content}"`}</div>
            </div>
          )}
          {error && (
            <div className="card">
              <div className="card-body">{error}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Quote;
