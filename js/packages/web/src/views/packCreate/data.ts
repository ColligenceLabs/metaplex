import { PackDistributionType } from '@colligence/metaplex-common';
import { PackState } from './interface';

export const INITIAL_PACK_STATE: PackState = {
  selectedItems: {},
  selectedVouchers: {},
  allowedAmountToRedeem: 0,
  name: '',
  description: '',
  uri: '',
  distributionType: PackDistributionType.Fixed,
  weightByMetadataKey: {},
  supplyByMetadataKey: {},
  isUnlimitedSupply: false,
  mutable: true,
};
