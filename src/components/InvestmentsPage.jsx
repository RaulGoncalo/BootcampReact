import Header from './Header';
import Main from './Main';
import Investments from './Investments';
import { dataInvestments } from '../data/investments'

export default function InvestmentsPage() {
  return (
    <>
      <Header />

      <Main>
        {
          dataInvestments.map((item) => {
            return <Investments key={item.id} investment={item} />
          })
        }
      </Main>
    </>
  )
}
