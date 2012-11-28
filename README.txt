This is a fork of gitweb from the official git repository that adds a GitHub-like clone URL bar and a GitHub-like theme.

Thanks to the following projects:
	gitweb-theme, by kogakure <https://github.com/kogakure/gitweb-theme>
	css3-github-buttons, by neculas <https://github.com/necolas/css3-github-buttons>
They are sub-moduled here, so check them out.

For an example, check out my gitweb site: <http://git.panthera.ca>

To install, run:
	git submodule init && git submodule update   (to pull submodule sources)
	make
	sudo make install gitwebdir=/path/to/install/to


Modified code destributed under LGPL-v2 license, since that is the original license of git/gitweb.  The gitweb-theme and css3-github-buttons submodules have their own licenses.
