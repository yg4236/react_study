import CreateMemberModalContent from './CreateMemberModalContent';
import createModalProvider from './createModalProvider';
import DeleteModalContent from './DeleteModalContent';

export const CREATE_MEMBER_MODAL = 'create_member_modal';
export const CONFIRM_DELETE_MODAL = 'confirm_delete_modal';

const CONTENT_MAP = {
  [CONFIRM_DELETE_MODAL]: DeleteModalContent,
  [CREATE_MEMBER_MODAL]: CreateMemberModalContent,
};

export default createModalProvider(CONTENT_MAP);
