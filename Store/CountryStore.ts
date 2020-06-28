import {observable} from 'mobx';
import {createContext} from 'react';
import {Data} from '../src/Const/Data2';
class countryStore {
  @observable Modal: boolean = false;
  @observable Country_Detail: any = Data[1];

  ModalOpen = () => {
    if (this.Modal) {
      this.Modal = false;
    } else {
      this.Modal = true;
    }
  };

  SelectedItem = (result: any) => {
    this.Modal = false;
    this.Country_Detail = result.item;
  };
}

export const CountryStore = createContext(new countryStore());
