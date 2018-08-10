#!make

NAME         =  api
PORTS        =  80:80

BUILD_FLAGS  =  -t $(NAME)
DEPLOY_FLAGS =  -d -p $(PORTS) -it --rm --name $(NAME) 

all:
	make -i stop
	make build
	make deploy

.PHONY: stop build deploy

stop:
	@docker container stop $(NAME)

build:
	@docker build $(BUILD_FLAGS) .

deploy:
	@docker run $(DEPLOY_FLAGS) $(NAME)


