import classes from './Loader.module.css';

const Loader = (props) => {
  return (
    <div className={classes.loader}>
      <div className={classes.circle}></div>
      <div className={classes.circle}></div>
      <div className={classes.circle}></div>
      <div className={classes.circle}></div>
      <div className={classes.circle}></div>
    </div>
  );
};

export default Loader;