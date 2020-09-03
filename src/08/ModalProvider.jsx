import createProvider from '../doit-ui/Modal/create';
import { TRADE_COIN_MODAL } from './constants/modals';
import TradeCoinPage from './components/main/TradeCoinPageContainer';
export default createProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage,
});
