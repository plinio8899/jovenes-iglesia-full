import { useState, useEffect } from "react"
import { Loading } from "../Componets/Loading/Loanding"

export function TablaH() {

  const url = "/h-points/"
  const [desc, setDesc] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDesc(data.data.reverse())
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <div>
          <div className="tableTeam">
            {desc?.map((tabla) => (
              <>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td style={{ textAlign: "center" }} width="18%">
                        {tabla.number}
                      </td>
                      <td>{tabla.description}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

