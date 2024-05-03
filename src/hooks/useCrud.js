import { useState } from "react";
import axios from "axios";

const useCrud = (BASEURL) => {
  const [response, setResponse] = useState();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getApi = (path) => {
    const url = `${BASEURL}${path}`;
    axios
      .get(url)
      .then((res) => setResponse(res.data))
      .catch((err) => {
        setHasError(err);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const postApi = (path, data) => {
    const url = `${BASEURL}${path}`;
    console.log(data);
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        setResponse([...response, res.data]);
      })
      .finally(() => setIsLoading(false))
      .catch((err) => {
        setHasError(err);
        console.log(err);
      });
  };

  const deleteApi = (path, id) => {
    const url = `${BASEURL}${path}${id}`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
        setResponse(response.filter((e) => e.id !== id));
      })
      .finally(() => setIsLoading(false))
      .catch((err) => {
        setHasError(err);
        console.log(err);
      });
  };

  const updateApi = (path, id, data) => {
    const url = `${BASEURL}${path}${id}/`;
    console.log(url);
    console.log(data);
    axios
      .patch(url, data)
      .then((res) =>
        setResponse(response.map((e) => (e.id === id ? res.data : e)))
      )
      .finally(() => setIsLoading(false))
      .catch((err) => {
        setHasError(err);
        console.log(err);
      });
  };

  return [response, getApi, postApi, deleteApi, updateApi, hasError, isLoading];
};

export default useCrud;
