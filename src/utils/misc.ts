export const calcSkeleDay = () => {
  const date_1 = new Date('7/25/2017');
  const date_2 = new Date();
  const difference = date_2.getTime() - date_1.getTime();
  return Math.ceil(difference / (1000 * 3600 * 24));
};
