import { useState, useEffect, useCallback } from 'react'
/*
  useData関数
  data (todoリストの情報)
  addData(todoを追加する関数)
  removeData(todoを削除する関数)
*/
export const useData = (initData) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!initData) {
      return
    }

    setData(initData)
  },[])

  const addData = useCallback((_data) => {
    setData([...data, _data]);
  }, [])

  const removeData = useCallback((_data) => {
    const _tmpData = data;
    const tmpData = _tmpData.filter((x) => {
      return x !== _data
    })
    setData(tmpData);
  }, [])

  return [data, { addData, removeData }];
}
