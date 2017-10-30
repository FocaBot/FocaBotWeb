
#### Running FocaBot in the background

Since FocaBot requires to be constantly running in order to work, you might want to run it
in the background somehow, and even make it start automatically with the OS.

The [PM2](http://pm2.keymetrics.io/) process manager simplifies this:

```shell
npm install -g pm2 # This installs pm2
pm2 start focabot # This starts FocaBot in the background
```

After running those commands, it's safe to close the terminal window, FocaBot will keep running in
the background and auto-restarted in case of failure.

If you want to make FocaBot automatically start in the background with the OS, run those commands:

```shell
pm2 save
pm2 startup
```

>NOTES:
> - `pm2 startup` might not work on Windows

