import { RecoilRoot } from 'recoil'
import Counter from './component/Counter'

function App() {

  return (
    <>
      <h1>Learning Recoil</h1>
      <br />

      {/* need to wrap the component in recoilroot if we use any recoil method inside or in its inner component  */}
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </>
  )
}

export default App
