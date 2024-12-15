export interface articleTree {
  /**
   * 主键
   */
  id: string | number;

  /**
   * 节点名称
   */
  label: string;

  /**
   * 父级别ID
   */
  pid: string | number;

  /**
   * 子节点数组对象
   */
  children: articleTree[];

  /**
   * 文章正文
   */
  articelMain: string;

  /**
   * 导航id
   */
  navId: string | number;
}
