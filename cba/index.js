import {NativeModules} from 'react-native'

const RNFetchBlob = NativeModules.RNFetchBlob

export default {
    selectCertificate: RNFetchBlob.selectCertificate
}
