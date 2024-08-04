import PageLogicHelper from '../../helpers/PageLogicHelper';

const HomeLogic = () => {
  const { useLoadPage, pageStatus, setPageStatus } = PageLogicHelper();

  useLoadPage(async () => {
    setPageStatus('recent');
  });

  return {
    pageStatus,
  };
};

export default HomeLogic;
