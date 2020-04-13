import { useEffect, useState } from "react";
import jsonPlaceHolder from "./../apis/jsonPlaceHolder";

const useResources = (resource) => {
  const [resources, setResource] = useState([]);

  useEffect(() => {
    const fetchResouces = async () => {
      const response = await jsonPlaceHolder.get(resource);

      setResource(response.data);
    };

    fetchResouces(resource);
  }, [resource]);

  return resources;
};

export default useResources;
