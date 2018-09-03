import React from 'react';
import PropTypes from 'prop-types';
import { List, Avatar, Icon } from 'antd';
import CHARACTERS from 'constants/characters';
import IconText from 'components/IconText';

const findCharacterByName = name => CHARACTERS.find(c => c.name === name).img;

function MyList(props) {
  const spinnerProps = {
    spinning: props.isLoading,
    indicator: <Icon type="loading" spin />,
    tip: 'Loading',
  };

  return (
    <List
      dataSource={props.dataSource}
      loading={spinnerProps}
      renderItem={item => (
        <List.Item
          key={item.name}
          actions={[
            <IconText
              type="star-o"
              text={item.ratings ? item.ratings.length : 0}
            />,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={findCharacterByName(item.name)} />}
            title={<span>{item.name}</span>}
            description={item.submittedBy}
          />
          {item.combo}
        </List.Item>
      )}
    />
  );
}

MyList.propTypes = {
  dataSource: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default MyList;
