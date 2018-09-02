import React from 'react';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';
import CHARACTERS from 'constants/characters';
import IconText from 'components/IconText';

const findCharacterByName = name => CHARACTERS.find(c => c.name === name).img;

function MyList(props) {
  return (
    <List
      size="large"
      dataSource={props.dataSource}
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
};

export default MyList;
