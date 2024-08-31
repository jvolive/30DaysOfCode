import React from "react";
import { Avatar, List } from "antd";

import "./projects.scss";

const data = [
  {
    title: "Projeto 1",
  },
];

export const Projects: React.FC = () => (
  <div className="new-list-projects-container">
    <h3>Projects</h3>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={<a href="#">{item.title}</a>}
            description="O primeiro desafio será realizar uma WEB API em C#,
            é algo que preciso melhorar em alguns pontos"
          />
        </List.Item>
      )}
    />
  </div>
);
