import styled from 'styled-components';
import { DarkYellow } from 'assets/styles/colors';

const scrollWidth = '17px';

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  height: 100%;
  overflow: auto;
  .list {
    padding: 0;
    display: flex;
    flex-direction: column;
    height: calc(100% - 0.5rem - 30px);
  }

  .items {
    height: 100%;
  }
`;

export const MoveContainer = styled(Row)`
  ${props => !props.isDesktop && 'flex: 1'};
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding: 0.5rem 0;
`;

export const Collapsible = styled(MoveContainer)`
  padding-right: ${scrollWidth};
`;

export const HeaderContainer = styled(Row)`
  padding-right: ${scrollWidth};
  color: ${DarkYellow};
  border-bottom: 1px solid;
  margin-top: 0.5rem;
`;

export const TextCell = styled.div`
  flex: 1;
`;

export const EmptyHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  color: white;
`;

export const NoValue = styled.div`
  color: rgba(255, 255, 255, 0.25);
`;
