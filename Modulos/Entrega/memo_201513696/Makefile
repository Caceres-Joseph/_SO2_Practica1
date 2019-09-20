
obj-m	:= memo_201513696.o

#KERNELDIR ?= ~/armsystem/kernel/linux-4.9.30/
KERNELDIR ?= /lib/modules/$(shell uname -r)/build
PWD       := $(shell pwd)

all: default

default:
	$(MAKE) -C $(KERNELDIR) M=$(PWD) modules


clean:
	rm -rf *.o *~ core .depend .*.cmd *.ko *.mod.c .tmp_versions

test:
	sudo dmesg -C
	sudo insmod memo_201513696.ko
	sudo dmesg
	sudo dmesg -C
	cat /proc/memo_201513696
	sudo rmmod memo_201513696
	sudo dmesg
